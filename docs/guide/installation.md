# Installation and Basic Usage

## Install
To install `vue-and-pagination` to your project just run following command 


```bash
npm install vue-and-pagination # OR yarn add vue-and-pagination
```


## Usage

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
