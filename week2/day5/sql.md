# SQL Datasets

## Reminder

- extending assignment submission (minimum 70% of the required assignments)
- if you have achieved your yellow belt + 70% assignment completion -> Python will be unlocked start Thursday evening
- project presentations @2pm

[Sign up sheet](https://docs.google.com/spreadsheets/d/1MhOfh3lj8pPpIYqoeuMbsD2n305UtHmzh3nkM01bQWM/edit#gid=0)

---

## Sample Sets

- [dev.mysql](https://dev.mysql.com/doc/index-other.html)
- World
- Employees
- [Join](https://www.interfacett.com/blogs/multiple-joins-work-just-like-single-joins/)

```sql
-- SELECT name, population, language
-- FROM world.country as country
-- JOIN countrylanguage
-- ON country.code = countrylanguage.countrycode
-- WHERE name = 'Saudi Arabia';

-- What are we looking for?

SELECT COUNT(city.id) AS number_of_cities,
country.name as country_name
FROM country
JOIN city ON country.code = city.countrycode
GROUP BY country.code
ORDER BY number_of_cities DESC;

-- 1. What query would you run to get all the countries that speak Slovene? Your query should return the name of the country, language and language percentage. Your query should arrange the result by language percentage in descending order. (1)

-- 2. What query would you run to display the total number of cities for each country? Your query should return the name of the country and the total number of cities. Your query should arrange the result by the number of cities in descending order. (3)

-- 3. What query would you run to get all the cities in Mexico with a population of greater than 500,000? Your query should arrange the result by population in descending order. (1)

-- 4. What query would you run to get all languages in each country with a percentage greater than 89%? Your query should arrange the result by percentage in descending order. (1)

-- 5. What query would you run to get all the countries with Surface Area below 501 and Population greater than 100,000? (2)

-- 6. What query would you run to get countries with only Constitutional Monarchy with a capital greater than 200 and a life expectancy greater than 75 years? (1)

-- 7. What query would you run to get all the cities of Argentina inside the Buenos Aires district and have the population greater than 500, 000? The query should return the Country Name, City Name, District and Population. (2)

-- 8. What query would you run to summarize the number of countries in each region? The query should display the name of the region and the number of countries. Also, the query should arrange the result by the number of countries in descending order. (2)

```

---

```sql
SELECT first_name, last_name, -- customer
address, address2, -- address
city, -- city
country -- country
FROM customer as customer
JOIN address
ON address.address_id = customer.address_id
JOIN city
ON city.city_id = address.city_id
JOIN country
ON country.country_id = city.country_id
;
```
