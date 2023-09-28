function manipulateArray(){
    const colors = ["white", "blue", "red", "green", "black", "yellow","brown", "violet", "pink", "cyan", "magenta", "gray"]
    colors.push("orange");
    colors.pop();
    colors.splice(1, 1);
    colors.unshift("fucsia");
    colors.sort();
    console.log(colors);
}