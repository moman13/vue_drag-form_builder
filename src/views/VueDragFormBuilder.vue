<template>
  <div>
    <div class=" mb-xl-10 row">
      <div class="col-3">
        <div class="card">
          <div class="card-body border-top ">
              <small>
                    Text Elements
              </small>
              <div class="row mt-1">
                <div class="col-md-6" draggable="true" @dragstart="onDragStart(fields[0])">
                  <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                      <span class="svg-icon svg-icon-muted svg-iلcon-2hx" style="padding: 5px;color: #636060f2;">
                                  <i class="bi bi bi-fonts" style="font-size: x-large;"></i>
                                 <span class="element-title">Single line</span>
                      </span>
                  </div>
                </div>
                <div class="col-md-6" draggable="true" @dragstart="onDragStart(fields[1])">

                  <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                    <span class="svg-icon svg-icon-muted svg-icon-2hx" style="padding: 5px;color: #636060f2;">
                                <i class="bi bi-justify-left" style="font-size: x-large;"></i>
                                <span class="element-title">Multiline</span>
                    </span>

                  </div>
                </div>
                <div class="col-md-6 mt-3" draggable="true" @dragstart="onDragStart(fields[2])">
                  <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                      <span class="svg-icon svg-icon-muted svg-icon-2hx" style="padding: 5px;color: #636060f2;">
                                  <i class="bi bi-123" style="font-size: x-large;"></i>
                                  <span class="element-title">Number</span>
                      </span>

                  </div>
                </div>

              </div>
          </div>
          <div class="card-body  ">
            <small>
              Date Elements
            </small>
            <div class="row mt-1">
              <div class="col-md-6">
                <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                      <span class="svg-icon svg-icon-muted svg-icon-2hx" style="padding: 5px;color: #636060f2;">
                                  <i class="bi  bi-calendar-date" style="font-size: x-large;"></i>
                                 <span class="element-title">Date</span>
                      </span>
                </div>
              </div>
              <div class="col-md-6">

                <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                    <span class="svg-icon svg-icon-muted svg-icon-2hx" style="padding: 5px;color: #636060f2;">
                                <i class="bi bi-clock" style="font-size: x-large;"></i>
                                <span class="element-title">Time</span>
                    </span>

                </div>
              </div>
              <div class="col-md-6 mt-3">
                <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                      <span class="svg-icon svg-icon-muted svg-icon-2hx" style="padding: 5px;color: #636060f2;">
                                  <i class="bi bi-calendar" style="font-size: x-large;"></i>
                                  <span class="element-title">Date & Time</span>
                      </span>

                </div>
              </div>

            </div>
          </div>
          <div class="card-body  ">
            <small>
              Multi  Elements
            </small>
            <div class="row mt-1">
              <div class="col-md-6">
                <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                      <span class="svg-icon svg-icon-muted svg-icon-2hx" style="padding: 5px;color: #636060f2;">
                                  <i class="bi  bi-toggle-on" style="font-size: x-large;"></i>
                                 <span class="element-title" >Yes/No</span>
                      </span>
                </div>
              </div>
              <div class="col-md-6">

                <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                    <span class="svg-icon svg-icon-muted svg-icon-2hx" style="padding: 5px;color: #636060f2;">
                                <i class="bi bi-caret-down-square" style="font-size: x-large;"></i>
                                <span class="element-title">Dropdown</span>
                    </span>

                </div>
              </div>
              <div class="col-md-6 mt-3">
                <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                      <span class="svg-icon svg-icon-muted svg-icon-2hx" style="padding: 5px;color: #636060f2;">
                                  <i class="bi bi-check2-square" style="font-size: x-large;"></i>
                                  <span class="element-title">Checkbox</span>
                      </span>

                </div>
              </div>
              <div class="col-md-6 mt-3">
                <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                      <span class="svg-icon svg-icon-muted svg-icon-2hx" style="padding: 5px;color: #636060f2;">
                                  <i class="bi  bi-ui-checks" style="font-size: x-large;"></i>
                                  <span class="element-title">Checklist</span>
                      </span>

                </div>
              </div>

            </div>
          </div>
          <div class="card-body  ">
            <small>
              Media  Elements
            </small>
            <div class="row mt-1">

              <div class="col-md-6">

                <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                    <span class="svg-icon svg-icon-muted svg-icon-2hx" style="padding: 5px;color: #636060f2;">
                                <i class="bi bi-card-image" style="font-size: x-large;"></i>
                                <span class="element-title">Image</span>
                    </span>

                </div>
              </div>
              <div class="col-md-6 ">
                <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                      <span class="svg-icon svg-icon-muted svg-icon-2hx" style="padding: 5px;color: #636060f2;">
                                  <i class="bi bi-upload" style="font-size: x-large;"></i>
                                  <span class="element-title">File Upload</span>
                      </span>

                </div>
              </div>
              <div class="col-md-6 mt-3">
                <div class="card" style="background-color: #f2f2f2;color: #999999ab;">
                      <span class="svg-icon svg-icon-muted svg-icon-2hx" style="padding: 5px;color: #636060f2;">
                                  <i class="bi bi-paperclip" style="font-size: x-large;"></i>
                                 <span class="element-title">Attachments</span>
                      </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-9">
        <div class="card mb-5 mb-xl-10  " @dragover.prevent @drop="onDrop"  style="height: 100%;padding: 20px;">
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
        {id:1, type: 'text-input', label: 'Single line'  ,input_type:'text',required:false},
        { id:2,type: 'textarea-input', label: 'Multiline'  ,input_type:'textarea',required:false},
        { id:3,type: 'number-input', label: 'Number'  ,input_type:'number',required:false},
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

