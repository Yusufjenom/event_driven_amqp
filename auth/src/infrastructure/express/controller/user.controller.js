import { UserServiceLayer } from "../../../domain/services/user.service.js";
import { TryCatchFn } from "../../../utils/tryCatch.js";
import { Producer } from "../middleware/producerMiddleware.js";

const userServiceFn = new UserServiceLayer();
const producer = new Producer();

export class UserControllerLayer {
  createUser = TryCatchFn(async (req, res) => {
    const response = await userServiceFn.createUser(req.body);
    await producer.publishMessage("Info", {
      success: true,
      name: `${req.body.firstname} ${req.body.lastname} `,
      message: response,
    });
    return res.status(201).json({
      success: true,
      message: response,
    });
  });
}
