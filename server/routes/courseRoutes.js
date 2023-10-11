import {Router} from 'express'
import { addLectureToCourseById,removeCourse,updateCourse,createCourse, getAllCourses, getLecturesByCourseId, removeLectureFromCourse } from '../controllers/courseController.js';
import { authorizedSubscriber,authorizedRoles, isLoggedIn } from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js'
const router = Router();

router.route('/')
.get(getAllCourses)
.post(
    isLoggedIn,//authentication
    authorizedRoles('ADMIN'),//authorization
    upload.single('thumbnail'),
    createCourse
    )
    .delete(
        isLoggedIn, 
        authorizedRoles('ADMIN'), 
        removeLectureFromCourse);

router.route('/:id')
.get(isLoggedIn,authorizedSubscriber,getLecturesByCourseId)
.put(
    isLoggedIn,//authentication
    authorizedRoles('ADMIN'),//authorization
    updateCourse
    )
.delete(
    isLoggedIn,//authentication
    authorizedRoles('ADMIN'),//authorization
    removeCourse)


.post(
    isLoggedIn,//authentication
    authorizedRoles('ADMIN'),//authorization
    upload.single('lecture'),
    addLectureToCourseById
)



export default router;