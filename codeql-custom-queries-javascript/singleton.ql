import javascript

class SingletonLikeClass extends ClassDefinition {
  SingletonLikeClass() { this = this }

  predicate hasStaticInstanceField() {
    exists(FieldDefinition f |
      f = this.getField("instance") and
      f.isStatic()
    )
  }

  predicate hasStaticGetInstanceMethod() {
    exists(MethodDefinition m |
      m = this.getMethod("getInstance") and
      m.isStatic()
    )
  }
  predicate isSingletonLike() {
    hasStaticInstanceField() and hasStaticGetInstanceMethod()
  }
}

from SingletonLikeClass c
where c.isSingletonLike()
select
  c,
  c.getLocation().getFile().getRelativePath(),  // Pfad relativ zum Projekt
  c.getLocation().getStartLine(),               // Startzeile
  "Singleton Kandidat: " + c.getIdentifier().getName()
