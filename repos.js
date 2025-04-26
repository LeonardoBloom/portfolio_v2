

async function projects() {

    const response = await fetch('https://api.github.com/users/leonardobloom/repos', )

    if(response.ok) {
        console.log("success")
        const data = await response.json();

        // console.log(data)

        const sortedData = data.sort((a, b) => b.size - a.size);

        console.log(sortedData);

    }

}

projects();