<template>
  <div>
    <div class=" mb-xl-10 row">
      <div class="col-3">
        <div class="card mb-3" v-if="selected">
          <div class="card-header border-0 pt-6">
            <div class="card-title" >
              <h3>خصائص الحقل</h3>
            </div>
            <span class="cursor-pointer" @click="selected=null">
                            <svg style="width: 20px;" fill="#ff0000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
                        </span>

          </div>
          <div class="card-body border-top ">
            <div>
              <div class="col-12 mb-2">
                <label class="mb-2">اسم الحقل </label>
                <input  v-model="selected.label"  type="text"  class="form-control form-control-solid"/>
              </div>
              <div class="col-6 mb-2 mt-3" >

                <input v-model="selected.required"  type="checkbox"  />   <label>اجباري </label>
              </div>
              <div class="row mb-2" v-if="selected.type == 'select-input' || selected.type == 'multiple-select-input'">
                <div class="col-12 mb-2">
                  <label>ونوع الحقل</label>
                  <select v-model="selected.input_type"  name="" id="" class="form-control">
                    <option value="options">خيارات جديدة </option>
                    <option value="model">خيارات معرفة مسبقا</option>
                  </select>
                </div>
                <div class="col-12 mb-2" v-if="selected.input_type=='model'">
                  <select v-model="selected.model_name"  name="xxx"  class="form-control">
                    <option v-for="data in getSelectdOptionMenu"  :value="data.id">{{data.name}}</option>


                  </select>
                </div>
                <div class="col-12" v-else>

                  <div   class="mb-2" v-for="(row,index) in selected.options" :id="index" >
                    <span class="delete_options"  @click="addOptions" v-if="index==0"><i class="fas fa-plus-circle" style="color:blue"></i></span>
                    <span class="delete_options"  @click="removeOptions(index)" v-if="index!==0"><i class="far fa-trash-alt" style="color:red"></i></span>
                    <input type="text" v-model="selected.options[index]" class="form-control" />

                  </div>
                </div>

              </div>
              <div class="row mb-2" v-else-if="selected.type == 'text-input'">

              </div>

            </div>
          </div>
        </div>
        <div class="card mb-3" v-for="field in fields" :key="field.id" draggable="true" @dragstart="onDragStart(field)">
          <div class="card-body border-top ">
            <h1 >
                            <span v-if="field.input_type=='checkbox'" class="svg-icon svg-icon-muted svg-icon-2hx">
                                <i class="bi bi-check2-square" style="font-size: x-large;"></i>
                            </span>
              <span v-if="field.input_type=='text'" class="svg-icon svg-icon-muted svg-icon-2hx">
                                <i class="bi bi-type" style="font-size: x-large;" ></i>

                            </span>

              <span v-if="field.input_type=='textarea'" class="svg-icon svg-icon-muted svg-icon-2hx">
                                <i class="bi bi-justify-right" style="font-size: x-large;"></i>
                            </span>
              <span v-if="field.input_type=='date'"  class="svg-icon svg-icon-muted svg-icon-2hx">
                                <i class="bi bi-calendar-check" style="font-size: smaller;"></i>
                            </span>
              <span v-if="field.input_type=='number'"  class="svg-icon svg-icon-muted svg-icon-2hx">
                <i class="bi bi-123"></i>
                </span>
              <span  v-if="field.input_type=='time'" class="svg-icon svg-icon-muted svg-icon-2hx">
                                <i class="bi bi-clock" style="font-size: smaller;"></i>
                            </span>
              <span  v-if="field.input_type=='years'" class="svg-icon svg-icon-muted svg-icon-2hx">
                                <i class="bi bi-calendar-date" style="font-size: smaller;"></i>
                            </span>
              <span v-if="field.input_type=='file'" class="svg-icon svg-icon-muted svg-icon-2hx">
                               <i class="bi bi-upload" style="font-size: smaller;"></i>
                            </span>
              <span v-if="field.input_type=='select'" class="svg-icon svg-icon-muted svg-icon-2hx">

                                <i class="bi bi-ui-checks-grid" style="font-size: x-large;"></i>
                            </span>
              <span v-if="field.input_type=='selectmuilt'" class="svg-icon svg-icon-muted svg-icon-2hx">


                                <i class="bi bi-ui-checks" style="font-size: x-large;"></i>
                            </span>

              {{ field.label }}</h1>


          </div>
        </div>

      </div>
      <div class="col-9">
        <div class="card mb-5 mb-xl-10 action_area " @dragover.prevent @drop="onDrop"  style="height: 100%;padding: 20px;">
          <draggable v-model="formFields" @end="onEnd">

            <transition-group tag="div" name="list">
              <component v-for="(field, index) in formFields"
                         :is="field.type"
                         :key="field.id"

                         :width="field.width"
                         :name="field.name" :label="field.label" :index="index" :field="field" :is_locked="false" >

              </component>
            </transition-group>

          </draggable>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  components: {
    draggable,
  },
  data() {
    return {
      draggedFieldIndex: null,
      fields: [
        {id:1, type: 'text-input', label: 'اجابة قصيرة'  ,input_type:'text',required:false},
        { id:2,type: 'textarea-input', label: 'فقرة'  ,input_type:'textarea',required:false},
        { id:3,type: 'number-input', label: ' رقم'  ,input_type:'number',required:false},
        { id:4,type: 'checkbox', input_type:"checkbox", label: 'مربع اختيار',required:false },
        { id:5,type: 'select-input', label: 'قائمة منسدلة', options: ['اخنيار 1', 'اختيار 2', 'اختيار 3'],input_type:'select',model_name:''},
        { id:6,type: 'multiple-select-input', label: 'خيار متعدد',options: ['اخنيار 1', 'اختيار 2', 'اختيار 3'],input_type:'selectmuilt',model_name:'' },
        { id:7,type: 'date-input', label: ' تاريخ'  ,input_type:'date',required:false},
        { id:8,type: 'time-input', label: 'وقت'  ,input_type:'time',required:false},
        { id:9,type: 'year-input', label: 'سنة'  ,input_type:'years',required:false},
        { id:10,type: 'file-input', label: 'تحميل ملف '  ,input_type:'file',required:false},

      ],
      formFields: [],
      selected:null
    }
  },
  mounted() {
  },
  methods: {
    onEnd(event) {
    },
    onDragStart(field) {
      this.draggedField = field;
    },
    onDrop() {
      if (this.draggedField.type ) {
        const newField = {
          ...this.draggedField,
          name: `field_${this.formFields.length + 1}`,
          id:this.formFields.length + 1,
          width: 100
        };

        // Deep copy the options array if it exists
        if (newField.options) {
          newField.options = [...newField.options];
        }
        this.formFields.push(newField);
        this.draggedField = null;
      }

    },
    editInput(data){
      console.log(data)
      this.selected = this.formFields[data];
    },
    deleteAction(data){
      this.formFields.splice(data, 1);
    },
    addOptions(){
      this.selected.options.push('اختيار جديد ');
    },
    removeOptions(index){
      this.selected.options.splice(index, 1);
    },
  },
}
</script>
<style>

.action_area .active{
  border: 1px dashed #000!important;
}

.delete_options{
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-bottom:5px
}
.droppable-area {
  padding: 10px;
  border: 1px dashed #ccc;
  background-color: #f1f1f1;
}
.draggable-field {
  cursor: grab;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
}
.action_area{
  position: relative;
  width: 100%;
  height: 100vh;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}
.text-input-container {
  position: relative;
  border: 1px solid transparent;
  padding: 10px;
  transition: border 0.3s;
}

.text-input-container:hover {
  border: 1px solid #7367f0; /* Border on hover */
}
</style>

