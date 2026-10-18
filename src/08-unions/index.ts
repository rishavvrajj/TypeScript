function printId(id: number | string) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        id.toFixed(2)
    }
}

type Admin = {
    role: "Admin",
    permission: string[]
}

type Customer = {
    role: "Customer",
    loyaltyPoints: number
}

function UserType(u: Admin | Customer) {
    if ('permission' in u) {
        console.log(u.role);
    } else {
        console.log(u.loyaltyPoints);
    }
}

// array of union 
const arryUnion: (string | number)[] = ["a", 1, "b", 3, 4, 5, "e", "g"]

// union of array

const unionOfArrys: string[] | number[] = Math.random() > 0.5 ? ["X", "Y"] : [1, 2]

// unionOfArrys.push("Z")