import dynamoose from "dynamoose";

const courseSchema = new dynamoose.Schema(
    {
        id: {
            type: String,
            hashKey: true,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

export const Course = dynamoose.model("Courses", courseSchema);