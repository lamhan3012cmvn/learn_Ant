import {FakeData} from './fakeDataCus'
import {ICustomer} from './interface'
export const getAll= ():Promise<ICustomer[]> =>{
    return new Promise(res=> setTimeout( ()=>res(FakeData),200))
}

export const getByName= (filter:string):Promise<ICustomer[]> =>{
    return new Promise(res=> setTimeout( ()=>res(FakeData.filter(e=>e.name.search(filter)!==-1)),200))
}