export const FormData = {
    studentForm : {
        lables : ["id","name","age","email"],
        fields : [
            {id : "id", name:"id" ,placeholder:"enter id",type:"number"},
            {id : "studentname", name:"name" ,placeholder:"enter studentname",type:"text"},
            {id : "age", name:"age" ,placeholder:"enter age",type:"nuber"},
            {id : "email", name:"email" ,placeholder:"enter email",type:"text"},
        ]
    },
    staffForm : {
        lables : ["id","name","age","email","roll"],
        fields : [
            {id : "id", name:"id" ,placeholder:"enter id",type:"number"},
            {id : "staffname", name:"name" ,placeholder:"enter staffname",type:"text"},
            {id : "age", name:"age" ,placeholder:"enter age",type:"nuber"},
            {id : "email", name:"email" ,placeholder:"enter email",type:"text"},
            {id : "roll", name:"roll" ,placeholder:"enter roll",type:"text"},
        ]
    },
    subjectForm : {
        lables : ["id","name",],
        fields : [
            {id : "id", name:"id" ,placeholder:"enter id",type:"number"},
            {id : "subjectname", name:"subjectname" ,placeholder:"enter subjectname",type:"text"},
        ]
    },
}