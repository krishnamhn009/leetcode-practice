class Solution {
    partiton(ar,low,high){
      let k=low-1;//0 ,3
      let pivot=ar[high];
    //  [  0, -3, -4, -6,  5, 10,  9]
      for (let j = low; j < high; j++) {
        if(ar[j]<pivot){
          k++;
          [ar[j],ar[k]]=[ar[j],ar[k]];
        }
      }
      [ar[k+1],ar[high]]=[ar[k+1],ar[high]];
       console.log(ar)
      return k+1;
    }
  sort(arr,low,high){
    if(low<high){
     let pi=this.partiton(arr,low,high);
     this.sort(arr,low,pi-1);
     this.sort(arr,pi+1,high);
    }
  
  }
    alternatePandE(ar) {
      //Write your code here
      let low=0,i=-1;
      for (let j = low; j < ar.length; j++) {
        if(ar[j]<=0){
          i++;
          [ar[j],ar[i]]=[ar[i],ar[j]];
        }
      }
      let pi=i+1;
      //console.log(pi,1,pi-1)
      this.sort(ar,1,pi-1);
      //this.sort(ar,pi+1,ar.length-1);
       console.log(ar)
      //low=i+1;
     // let k=1;
      //-6  -4 -3 5 9  10 
     // while(low<ar.length) {
     //   [ar[k],ar[low]]=[ar[low],ar[k]]
     //   low=low+2;k=k+2;
     // }
     // console.log(ar)
    }
}

new Solution().alternatePandE([0 ,-3, 5, 9, -4, 10, -6])