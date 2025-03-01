
import express from 'express';
import CoursesController from '../controllers/CoursesController';
const courseRoutes = express.Router();

courseRoutes.post("/create-course", (req,res)=> CoursesController.createCourse(req,res));
courseRoutes.get("/get-courses", (req,res)=> CoursesController.getCourses(req,res));

export default courseRoutes;