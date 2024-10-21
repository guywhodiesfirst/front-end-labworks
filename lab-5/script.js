const nameRegex = /^[А-ЯІЄЇ][а-яієї]* [А-ЯІЄЇ]\.\s?[А-ЯІЄЇ]\.$/
const groupRegex = /^[А-ЯІЄЇ]{2}\-[0-9][1-9]$/
const phoneRegex = /^(\(?[0-9]{3}\)|[0-9]{3})?\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/
const addressRegex = /^(м\.|с\.) [А-ЯІЄЇ][а-яієї]+$/
const emailRegex = /^([a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3})$/

const regularExpressions = [nameRegex, groupRegex, phoneRegex, addressRegex, emailRegex]
const inputFields = Array.from(document.querySelectorAll(".text-input"))

const fieldRegexPairs = inputFields.map((item, index) => ({
    field: item,
    regex: regularExpressions[index]
}))

