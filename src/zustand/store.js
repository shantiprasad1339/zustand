import axios from 'axios'
import { create } from 'zustand'

export const useCountStore = create((set) => ({
  count: 0,
  incCount: (value) => set((state) => ({ count: state.count + value })),
  decCount: (value) => set((state) => ({ count: state.count - value })),

  removeAllCount: () => set({ count: 0 }),
}))
export const useFetchData = create((set)=>({
     data:[],
     fetchData:async()=>{
        try {
            const responce = await axios.get("https://jsonplaceholder.typicode.com/posts")
           set({data:responce.data})
        } catch (error) {
            
        }
     }

}))