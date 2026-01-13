plugins {
    kotlin("jvm") version "2.2.21"
    id("com.github.johnrengelman.shadow") version "7.1.0"
    id("application")
}

application {
    mainClass.set("ru.nelmin.MainKt")
}

group = "com.nelmin"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation(kotlin("stdlib"))
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

tasks.jar {
    manifest {
        attributes(
            "Main-Class" to "ru.nelmin.MainKt"
        )
    }
}
