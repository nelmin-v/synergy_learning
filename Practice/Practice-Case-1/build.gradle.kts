plugins {
    kotlin("jvm") version "2.2.21"
    id("application")
}

application {
    mainClass.set("MainKt")
}

group = "com.nelmin"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
}

kotlin {
    jvmToolchain(17)
}

tasks.test {
    useJUnitPlatform()
}

tasks.named<JavaExec>("run") {
    standardInput = System.`in`
}

