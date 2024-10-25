<template>
    <div
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
        class="mb-10  "  :class="!is_locked?' text-input-container cursor-pointer ':''">
        <div class="control" v-if="!is_locked && isHovered">
            <span @click="editAction"  class="control_item" ><i class="fa fa-edit"></i></span>
            <span @click="deleteAction" class="control_item"><i class="far fa-trash-alt"></i></span>
        </div>
        <label  class="form-label">{{label}}<span v-if="field.required" style="color: red;font-family: auto;">*</span></label>
        <select   class="form-select" :name="name" :id="name"   v-model="field.value" >
            <option  v-for="option in options" :key="option" :value="option">{{option}}</option>
        </select>
    </div>
</template>

<script>

export default {
    props:['name','label',"field","index",'is_locked'],
    data() {
        return {
            options:this.field.options,
            input_type:this.field.input_type,
            model_name:this.field.model_name,
            isHovered:false

        }
    },
    created() {
        if(this.field.input_type == "model"){
            this.getBaseOnModelName();
        }

    },
    watch:{
      "field.model_name":function (newValue,oldValue) {
          if(this.field.input_type == "model" && newValue !=oldValue){
              console.log("is here to go")
              this.getBaseOnModelName();
          }
      }
    },
    methods: {
        editAction(){
            this.$emit('edit_icon',this.index );
        },
        deleteAction(){
            this.$emit('deleteAction',this.index );
        }
    }
}
</script>
<style>
.control{
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 30px;
    left: 10px;
    padding-bottom:5px
}
.control_item{
    margin-right:5px;
    cursor: pointer;
}
</style>
