export function update(name, value) {
    return {
        type: "Update",
        name,
        value
    };
}

export function calculate() {
    return { type: "Calculate" };
}

export function switchTab(name, value) {
    return { type: "SwitchTab", name, value };
}
