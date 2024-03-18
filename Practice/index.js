for (let  i= 1;  i<=5; i++) {
    for (let  j= 1;  j<=i; j++) {
       document.write("*")
        
    }
    document.write("<br/>")
}

for (let  i= 1;  i<=5; i++) {
    for (let  j= 1;  j<=i; j++) {
       document.write(j)
        
    }
    document.write("<br/>")
}

//for console
let str = ''
for (let i = 1; i <=5; i++) {
    for (let  j= 1;  j<=i; j++) {
        str += "*" 
    }
    str += '\n'
}
console.log(str)

//strating space 
for (let i = 1; i <=5; i++){
for (let k = 0; k < 5-i; k++) {
    document.write('&nbsp&nbsp')
    
}
for (let j= 1; j <=i; j++) {
    document.write('*')
    
}
document.write('<br/>')
}
    
for (let i = 1; i <=5; i++){
    for (let k = 0; k < 5-i; k++) {
        document.write('&nbsp&nbsp')
        
    }
    for (let j= 1; j <=i; j++) {
        document.write(j)
        
    }
    document.write('<br/>')
    }
        
    for (let i = 1; i <=5; i++){
        for (let k = 0; k < 5-i; k++) {
            document.write('&nbsp&nbsp')
            
        }
        for (let j= 1; j <=i; j++) {
            document.write('*')
            
        }
        for (let l = 2; l <=i; l++) {
           document.write('*')
        }
        document.write('<br/>')
        }

        const pyramid=()=> {
            let m = 1
            for (let i = 1; i <=5; i++){
                for (let k = 0; k < 5-i; k++) {
                    document.write('&nbsp&nbsp')
                    
                }
                for (let j= 1; j <=m; j++) {
                    document.write('*')
                    
                }
                
                document.write('<br/>')
                m=m+2
                }
        }
        pyramid()
        for (i = 4; i >= 1; i--) {
            for (k = 1; k <= 5 - i; k++) {
              document.write("&nbsp&nbsp");
            }
            for (j = 1; j <= i; j++) {
              document.write("*");
            }
            for (l = 1; l <= i - 1; l++) {
              document.write("*");
            }
            document.write("<br>");
          }
    
        for(let i=5; i>=1; i--){
            for(let j = 1;j<=i ; j++){
                document.write("*")
            }
            document.write("<br/>")
        }

        function reversePyramid() {
            let i, j, k, l;
            for (i = 5; i >= 1; i--) {
              for (k = 1; k <= 5 - i; k++) {
                document.write("&nbsp&nbsp");
              }
              for (j = 1; j <= i; j++) {
                document.write("*");
              }
              for (l = 2; l <= i; l++) {
                document.write("*");
              }
              document.write("<br>");
            }
          }
          reversePyramid();
          