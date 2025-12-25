import java.time.LocalDate
import java.time.format.DateTimeFormatter
import java.time.temporal.ChronoUnit
import java.util.Locale

fun main() {
    print("Введите день рождения (DD): ")
    val day = readLine()?.toInt()
    print("Введите месяц рождения (MM): ")
    val month = readLine()?.toInt()
    print("Введите год рождения (YYYY): ")
    val year = readLine()?.toInt()

    if (day == null || month == null || year == null) {
        throw Exception("Не верный ввод")
    }

    val birthDate = LocalDate.of(year, month, day)

    val dayOfWeek = getDayOfWeek(birthDate)
    println("День недели: $dayOfWeek")

    val isLeapYear = isLeapYear(year)
    println("Високосный год: ${if (isLeapYear) "Да" else "Нет"}")

    val age = calculateAge(birthDate)
    println("Ваш возраст: $age лет")

    displayDateWithStars(birthDate)
}

/**
 * Определение дня недели
 */
fun getDayOfWeek(date: LocalDate): String {
    val formatter = DateTimeFormatter.ofPattern("EEEE", Locale("ru"))
    return date
        .format(formatter)
        .replaceFirstChar { it.uppercase() }

}

/**
 * Определение високосности года
 */
fun isLeapYear(year: Int): Boolean {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
}

/**
 * Расчет возратса
 */
fun calculateAge(birthDate: LocalDate): Long {
    return ChronoUnit.YEARS.between(birthDate, LocalDate.now())
}

/**
 * Отрисовка символами *
 */
fun displayDateWithStars(date: LocalDate) {
    val numbers = arrayOf(
        arrayOf(" *** ", "*   *", "*   *", "*   *", " *** "), // 0
        arrayOf("  *  ", "  *  ", "  *  ", "  *  ", "  *  "), // 1
        arrayOf(" *** ", "    *", " *** ", "*    ", " *** "), // 2
        arrayOf(" *** ", "    *", " *** ", "    *", " *** "), // 3
        arrayOf("*   *", "*   *", " *** ", "    *", "    *"), // 4
        arrayOf(" *** ", "*    ", " *** ", "    *", " *** "), // 5
        arrayOf(" *** ", "*    ", " *** ", "*   *", " *** "), // 6
        arrayOf(" *** ", "    *", "   * ", "  *  ", "  *  "), // 7
        arrayOf(" *** ", "*   *", " *** ", "*   *", " *** "), // 8
        arrayOf(" *** ", "*   *", " *** ", "    *", " *** ")  // 9
    )

    val day = date.dayOfMonth.toString()
    val month = date.monthValue.toString()
    val year = date.year.toString()

    val dateParts = listOf(day, month, year)

    for (row in 0 until 5) {
        for (part in dateParts) {
            for (char in part) {
                val digit = char.toString().toInt()
                print(numbers[digit][row] + "  ") // Выводим цифры с двумя пробелами
            }
            print("   ") // Пробелы между частями даты
        }
        println() // Переход на новую строку
    }
}
