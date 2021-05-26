function recursiva (max) {
    if(max >= 20) return;
    max++;
    console.log(max);
    recursiva(max);
};
recursiva(0);