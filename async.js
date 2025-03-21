function fetchDataFromServer(callback) {
    setTimeout(() => {
        const data = "Data from server";
        callback(null,data);
    }, 2000);
}

function fetchDataWithCallback(callback) {
    fetchDataFromServer((error, data) => {
        if (error) {
            callback(error);
        } else {
            callback(null, data);
        }
    });
}

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        fetchDataFromServer((error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

async function fetchDataWithAsyncAwait(){
    try {
        const data = await fetchDataWithPromise();
        return data;
    } catch (error) {
        throw error;
    }
}


console.log("Pemanggilan data dari server...");

fetchDataWithCallback((error, data) => {
    if (error) {
        console.error("Callback error:", error);
    } else {
        console.log("Callback data:", data);
    }
});

fetchDataWithPromise()
    .then((data) => {
        console.log("Promise data:", data);
    })
    .catch((error) => {
        console.error("Promise error:", error);
    });

(async () => {
    try {
        const data = await fetchDataWithAsyncAwait();
        console.log("Async Await data:", data);
    } catch (error) {
        console.error("Async Await error:", error);
    }
})();