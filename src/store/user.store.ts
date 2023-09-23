import {defineStore} from 'pinia'

export const UserStore = defineStore({
    id: 'UserStore',
    state: ()=>{
        return {
            username: '',
            userRole: '',
            userInfo: {} as any,
            editorUserId: '' as string,
            currentDisable: [] as any,
            currentDrag: [] as any,
            creatingUserAvatar: "",
            creatingUserAvatar1: "",
            creatingUserAvatar2: "",
            creatingUserAvatar3: "",
            uploadFile: "",
            creatingUsers: {
                basicInfo: {},
                bodyData: {},
                sleepData: {},
                oralHealth: {},
                healthFormat: {},
                medicalConsultation: {}
            } as any,
            infectiousDiseasesHistory : [{
            }] as any,
            allergiesHistory :[{
                recordsId: '',
                datetime: '',
                title: '',
                type: 202
            }] as any,
            vaccinationHistory : [{
                recordsId: '',
                datetime: '',
                title: '',
                type: 203
            }] as any,
            illnessHistory : [{
                recordsId: '',
                datetime: '',
                title: '',
                type: 204
            }] as any
        }
    },
    getters:{

    },
    actions: {

    }
})