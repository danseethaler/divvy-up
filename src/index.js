module.exports = function(dates, assignments, participants) {
    const returnOb = {}

    // Iterate over the assignments
    assignments.forEach((assignment, i) => {
        // Strategically set the order of the partipants
        var people = reorderArray(participants, assignments, i)

        // Simply assign the participants in order to each date
        dates.forEach((date, index) => {
            returnOb[date] = returnOb[date] || { date }
            returnOb[date][assignment] = people[index % people.length]
        })
    })

    return returnOb
}

function reorderArray(participants, assignments, index) {
    const people = Object.assign([], participants)

    // Get the number of partipants to shift
    const shiftCount = Math.ceil(people.length / assignments.length * index)

    // Move people to the end of the assignment chain
    return people.concat(people.splice(0, shiftCount))
}
