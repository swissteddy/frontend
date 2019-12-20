export function setData(name, value) {
    return {
        type: "setData",
        name,
        value
    };
}


export function submit() {
    return { type: "Submit" };
}

export function switchTab(name, value) {
    return { type: "SwitchTab", name, value };
}
