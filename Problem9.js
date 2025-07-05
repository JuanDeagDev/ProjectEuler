let ans = 0
for (let i=1;i<1000;i++){
    for (let j=1;j<1000;j++) {
        for (let k=1;k<1000;k++){
            if (Math.pow(i, 2) + Math.pow(j, 2) == Math.pow(k, 2)) {
                if (i < j){
                    if (j < k){
                        if (i + j + k == 1000) {
                            console.log(i * j * k);
                        };
                    };
                };
            };
        };
    };
};
// result = 31875000