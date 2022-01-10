let arr = [60, 40, 55, 75, 64]
function alternatingSums(a) {
    let team1 = arr.filter((val, index) => {
        if(index % 2 === 0){
            return true
        }
    })
    
    let team2 = arr.filter((val, index) => {
        if(index % 2 !== 0){
            return true
        }
    })
    let teams = [team1, team2]
    let result = []
     teams.forEach(team =>{
        result = result.concat(team.reduce((prev, current) => prev + current))
    })
    return result
}
console.log(alternatingSums(arr))



