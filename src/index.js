function print (output="Server Started") {
    console.log(output);
    const body = document.querySelector('body');
    body.innerText = output;
}


print();