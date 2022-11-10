

const currentToggle = (id) => {
    const element = document.getElementById(`${id}`);
    console.log(element);
    element.classList.Toggle("toggle");
}