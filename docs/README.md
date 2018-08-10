---
home: true
heroImage: 
actionText: Get Started
actionLink: /guide/
footer: Copyright © 2018 Paul Sharypov
---

#Simple pagination component for convenient data render.  
#Just wrap your template presentation and scope your data. 


### Install & basic usage

```bash
npm install vue-simple-pagination # OR yarn add vue-simple-pagination
```

```vue
<template>
  <div>
  
   <pagination v-bind="pagination">
       <template slot-scope="{scope}">
           
           <div class="notification" v-for="(i, k) in scope" :key="k">
               <h2 class="title is-4">{{i.title}}</h2>
               <p>{{i.body}}</p>
           </div>
           
       </template>
   </pagination>
    
  </div>
</template>

<script>

  import Pagination from 'vue-simple-pagination'

  export default {
    components: { Pagination },
    data () {
      return {
        pagination: {
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
