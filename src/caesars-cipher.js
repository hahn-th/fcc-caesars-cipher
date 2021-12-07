function rot13(str) {
    let regex = /[A-Za-z]/;
    let result = "";
    for(let i=0;i<str.length;i++) {
      // Check if char is a letter
      if (str.charAt(i).match(regex)) {
        let base = 0;
        let upper = 0;
        let code = str.charCodeAt(i)

        if ((code >= 65 && code < 78) || (code >= 97 && code < 110))
          code += 13;
        else
          code -= 13;

        result += String.fromCharCode(code);
      }
      else {
        result += str.charAt(i);
      }
    }
    return result;
  }

  console.log("FREE CODE CAMP" === rot13("SERR PBQR PNZC"));
  console.log("FREE PIZZA!" === rot13("SERR CVMMN!"));
  console.log("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG." === rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));