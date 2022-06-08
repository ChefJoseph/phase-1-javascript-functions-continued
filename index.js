// code your solution here
// function saturdayFun(activity) {
    // console.log(`This Saturday I want to + ${activity}')
    // if (activity = 'rollerskate') {
        // return 
    // } else {
        // activity = 'bathe my dog'
        // return 
    // }
// }

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(adj="special") {
      return `You are ${flair }${adj}${flair}!`;
    }
  }
/*
// function wrapAdjective() {
    // const flair = "*"
    // return function() {
        // const adj = "special"
        // return function() {
        // console.log(`You are ${flair}${adj}${flair}!`)
    }
}
}*/