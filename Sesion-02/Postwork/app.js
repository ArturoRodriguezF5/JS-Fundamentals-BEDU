for (let i = 0; i <=100; i++) {
    let count = 0;

    for (let j = 0; j <= i; j++) {
        if (i % j === 0)
            count++;
    }

    if (count === 2 || i === 1)
        console.log(i);
}