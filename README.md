# Vue Pagination

Simple, generic and non-intrusive pagination component for Vue.js  

* Minimal setup, no overweight. Just install, import and wrap your items template
* You can change controls, accent-color, position, number of items per page and other  
* You can provide your own controls components with your own styles

[Documentation](https://pavelshar.github.io/vue-and-pagination/)  
[Examples](https://pavelshar.github.io/vue-and-pagination/guide/examples.html)

### Install
```bash
npm install vue-and-pagination # OR yarn add vue-and-pagination
```

### Basic usage  
* Import Pagination component from `vue-and-pagination`
* Register it as component
* Use it in your template
* Add props and data
* Create default slot with slot-scope
* Create render template 

```vue
<template>
  <div>
  
   <pagination v-bind="pagination" v-model="page">
       <template slot-scope="{scope}">
       
        // ... your item's template
        
        <div class="car" v-for="(c, k) in scope" :key="k">
            <div class="car__title">{{c.title}}</div>
            <div class="car__meta">
                <div>{{c.year}}</div>
                <div>{{c.vin}}</div>
                <div>{{c.color}}</div>
            </div>
        </div>   
          
       </template>
   </pagination>
    
  </div>
</template>

<script>

  import Pagination from 'vue-and-pagination'

  export default {
    components: { Pagination },
    data () {
      return {
        pagination: {
            items: [],
            limit: 5,
            controlsOnTop: false,
            controlsOnBottom: true,
            page: 1,
            sidePagesNumber: 2,
        }
      }
    }
  }
</script>
```


