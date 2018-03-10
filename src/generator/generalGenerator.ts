const generalGenerator = <T>(): T => {
    const dummy = <T>{};
    Object.keys(dummy).forEach((_: string) => {
        console.log(_);
    });

    return dummy;
}

export { generalGenerator };
