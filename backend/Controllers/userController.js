import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js"

export const updateUser = async (req,res) => {
    const id = req.params.id;

    try{
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        );

        res
            .status(200)
            .json({
                success: true,
                message:"Sccessfully updated",
                data:updatedUser,
            });
    } catch (err){
        res.status(500).json({success: false, message: "failed to update"})
    }
}
export const deleteUser = async (req,res) => {
    const id = req.params.id;

    try{
        await User.findByIdAndDelete(
            id,
        );

        res
            .status(200)
            .json({
                success: true,
                message:"Sccessfully deleted",
                data:updateUser,
            });
    } catch (err){
        res.status(500).json({success: false, message: "failed to delete"})
    }
}
export const getSingleUser = async (req,res) => {
    const id = req.params.id;

    try{
        const user = await User.findById(id).select("-password");

        res
            .status(200)
            .json({
                success: true,
                message:"User found",
                data:user,
            });
    } catch (err){
        res.status(404).json({success: false, message: "NO user found"})
    }
}
export const getAllUser = async (req,res) => {
    

    try{
        const users = await User.find({}).select("-password")

        res
            .status(200)
            .json({
                success: true,
                message:"Users found",
                data:users,
            });
    } catch (err){
        res.status(404).json({success: false, message: "NO  found"})
    }
}

export const getUserProfile = async (req,res) => {
    const userId = req.userId;

    try{
        const user = await User.findById(userId);

        if (!user){
            return res
            .status(404)
            .json({success:false, message:'User not found'});
        }

        const {password, ...rest} = user._doc;

        res
            .status(200)
            .json({
                success: true,
                message: "Profile info is getting",
                data: {... rest},
            });
    } catch (err){
        res
            .status(500)
            .json({success:false,message: "something went wrong, cannot get "})
    }
}

export const getMyAppointments = async(req,res)=>{
    try{
        // STEP 1: GET APPOINTMENTS FORM BOOKING FOR SPECIFIC USER
        const bookings = await Booking.find({user:req.userId})

        // STEP 2: EXTRACT DOCTOR ID FROM APPOINTMENT BOOKINGS
        const doctorIds = bookings.map(el=>el.doctor.id)

        // STEP 3: retrieve doctors using doctor ids
        const doctors = await Doctor.find({_id: {$id:doctorIds}}).select('-password')

        res.status(200).json({success:true, message:'Appointments are getting ', data: doctors})
        
    } catch (err){
        res
            .status(500)
            .json({success:false,message: "something went wrong, cannot get "})
    }
}