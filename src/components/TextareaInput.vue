<template>
    <div
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
        class="mb-10  " :class="!is_locked?' text-input-container cursor-pointer ':''" >
        <div class="control" v-if="!is_locked && isHovered">
            <span @click="editAction"  class="control_item" ><i class="fa fa-edit"></i></span>
            <span @click="deleteAction" class="control_item"><i class="far fa-trash-alt"></i></span>
        </div>
        <label :for="name" class="form-label">{{label}}<span v-if="field.required" style="color: red;font-family: auto;">*</span></label>
        <textarea  v-model="field.value"  class="form-control "  :id="name" :name="name" :required="field.required" >

        </textarea>

    </div>
</template>

<script>
export default {
    props:['name','label',"field","index",'is_locked'],
    data() {
        return {
            isHovered:false
        }
    },
    mounted() {
        console.log(this.index);
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
}
.control_item{
    margin-right:5px;
    cursor: pointer;
}
</style>
