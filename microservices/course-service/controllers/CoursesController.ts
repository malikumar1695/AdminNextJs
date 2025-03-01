import { Course } from "../models/Course";
import { Request, Response } from 'express';
import dynamoose from 'dynamoose';
class CoursesController {

    async createCourse(req: Request, res: Response): Promise<any> {
    
        const newCourse = new Course({
            id: "123",
            name: "Node.js Masterclass",
            description: "Learn Node.js from scratch",
        });

        await newCourse.save();
        console.log("Course created!");
        return res.status(200).json({ message: "success" })
    }
    async getCourses(req: Request, res: Response): Promise<any> {
    
        let items = await Course.scan().exec();
        return res.status(200).json({ message: "success", data: items });
    }
}
export default new CoursesController();