console.log("1. Open BookMyShow");
console.log("2. Search Movie");
console.log("3. Select Time");
console.log("4. Select Seats");
console.log("5. Ticket Booked");

// settimeout
setTimeout(()=>{
    console.log("1. Open BookMyShow");
}, 8000);
setTimeout(()=>{
    console.log("2. Search Movie");
}, 3000)
setTimeout(()=>{
    console.log("3. Select Seats");
}, 5000)
setTimeout(()=>{
    console.log("4. Make Payment");
}, 1000);
setTimeout(()=>{
    console.log("5. Ticket booked");
}, 2000)

// Callbacks
setTimeout(()=>{
    console.log("1. Open BookMyShow");
        setTimeout(()=>{
            console.log("2. Search Movie");
                setTimeout(()=>{
                    console.log("3. Select Seats");
                        setTimeout(()=>{
                            console.log("4. Make Payment");
                                setTimeout(()=>{
                                    console.log("5. Ticket booked");
                                }, 2000);
                        }, 1000);
                }, 5000);
        }, 3000);
}, 8000);