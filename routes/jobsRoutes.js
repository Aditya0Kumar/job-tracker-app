import express from 'express';
const router = express.Router();

import {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
} from '../controllers/jobsController.js'

router.route('/').post(createJob).get(getAllJobs);
router.route('/:id').delete(deleteJob).patch(updateJob);

export default router