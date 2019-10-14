const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      }
      ]},
  methods:{
    // books对象的数量增加与减方法,需要索引传入来确定是book集合中的具体哪个对象
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      this.books[index].count--
    },
    removeHandle(index){
      //vue的splice可以移除,可以替换;这里移除当前,传入当前索引,以及需要移除1位
      this.books.splice(index,1)
    },
    // 通过方法对数字进行过滤
    getFinalPrice(price){
      return "$"+price.toFixed(2)
    }
  },
  //vue的访问属性
  computed:{
    //在这里写方法计算总价格
    totalPrice(){
      let totalPrice=0
      //for循环遍历,books集合的全部对象,让其价格与数量属性相乘并相加
      for (let i =0;i<this.books.length;i++){
        totalPrice+=this.books[i].price*this.books[i].count
      }
      return totalPrice
    }
  },
  //vue的过滤器
  filters:{
    showPrice(price){
      return "$"+price.toFixed(2)
    }
  }
  });
