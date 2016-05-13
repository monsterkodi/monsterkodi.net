import copy, inspect
print
# print "EntityComponentSystem\n"

class Base (object):
    def say(self, something):
        print self.name() + ": " + something

#________________________________________________________________________________________________________________________
#________________________________________________________________________________________________________________________

class System (Base):

    # holds a dict of components and a component template.
    # adds itself to the world.

    def __init__(self, world, comp):
        self._world = world
        self._comp  = comp
        self._comps = {}
        self.say("Hello World!")
        world.addSystem(self)

    def name(self):
        return "System("+self._comp['name']+")"

    # takes any component as argument and returns the system component that is a sibling in the same entity.
    # if there is no such component, None is returned.
    # just a shortcut for getComponentForEntity with the component's entity.

    def getSiblingOfComponent(self, c):
        return self.getComponentForEntity(c.entity)

    # returns the component of this system in entity e. if there is no such component, None is returned.

    def getComponentForEntity(self, e):
        return e in self._comps and self._comps[e] or None

    # adds a copy of the template component to the entity, if the entity hasen't a component for this system already.

    def addComponentToEntity(self, e):
        if e not in self._comps:
            self._comps[e] = copy.deepcopy(self._comp)
            self.say("Entity "+str(e)+" + "+self._comps[e]['name'])
            self._world.dump()
        else:
            self.say("Entity "+str(e)+" ! "+self._comps[e]['name']+" (got one already)")

    # removes the component of this system from the entity, if any exists.

    def delComponentFromEntity(self, e):
        c = self.getComponentForEntity(e)
        if c:
            self.say("Entity "+str(e)+" - "+c['name'])
            del self._comps[e]
            del c
            self._world.dump()
#________________________________________________________________________________________________________________________
#________________________________________________________________________________________________________________________

class World (Base):

    # holds a list of systems and a list of entities.

    def __init__(self):
        self.say("Hello!")
        self._systems  = []
        self._entities = []
        self._lastID   = 0

    # adds a new entity to the world and returns it.

    def addEntity(self):
        newID = self.newEntityID()
        self.say("Welcome Entity "+str(newID))
        self._entities.append(newID)
        self.dump()
        return newID

    # removes an entity from the world. the entity's components get lost as well.

    def delEntity(self, e):
        self.say("Goodby  Entity "+str(e)+" -------")
        for s in self._systems:
            s.delComponentFromEntity(e)
        self._entities.remove(e)
        self.say("------- Entity "+str(e))
        self.dump()

    # adds a system to the world (called from system constructor).

    def addSystem(self, s):
        self.say("Hello "+s.name()+"!")
        self._systems.append(s)

    #____________________________________________________________________________________________________________________
    # internals

    def name(self):
        return "World"

    def newEntityID(self):
        self._lastID += 1
        return self._lastID

    def dump(self):
        print
        for e in self._entities:
            es = str(e) + " "
            for s in self._systems:
                c = s.getComponentForEntity(e)
                es += c and "X" or " "
            print es
        print

#________________________________________________________________________________________________________________________
#________________________________________________________________________________________________________________________

w  = World()                        # create the world
e1 = w.addEntity()                  # and add an entity to it

s1 = System(w, {'name':"Comp1"})    # create a system with a template for it's components

s1.addComponentToEntity(e1)         # add a component for the system to the entity

s2 = System(w, {'name':"Comp2"})    # create other systems
s3 = System(w, {'name':"Comp3"})

print

s2.addComponentToEntity(e1)         # add some more components and entities
s1.addComponentToEntity(e1)

e2 = w.addEntity()

s1.addComponentToEntity(e2)
s2.addComponentToEntity(e2)

e3 = w.addEntity()
s1.addComponentToEntity(e3)
s3.addComponentToEntity(e3)

w.delEntity(e2)
# w.delEntity(e1)
# w.delEntity(e3)


