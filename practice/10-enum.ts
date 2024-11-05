enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItOctober(month: Month) : boolean {
    return month == Month.Oct;
}

console.log(isItOctober(Month.Apr))
console.log(isItOctober(Month.Sep))
console.log(isItOctober(Month.Oct))

console.log(Month);
console.log(Month.Jan, Month['Jan'], Month[0], Month["0"])