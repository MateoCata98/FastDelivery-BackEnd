import { Request, Response } from "express";
import {
  authenticateUser,
  createUser,
  updateUser,
  deleteOneUser,
  getAllUsers,
  getAllActiveUsers
} from "../services/userServices";
export async function register(req: Request, res: Response): Promise<Response> {
  try {
    const newUser = await createUser(req.body);
    return res.status(201).send({ newUser });
  } catch (error) {
    console.log(error);

    return res.status(400).send({ message: (error as Error).message });
  }
}

export async function login(req: Request, res: Response): Promise<Response> {
  try {
    const { email, password } = req.body;
    const { token, user } = await authenticateUser(email, password);
    return res.status(201).send({ token, user, message: "Session started" });
  } catch {
    return res.status(500).send("Internal Server Error");
  }
}

export async function editUser(req: Request, res: Response): Promise<Response> {
  try {
    const userId = req.params.id;
    const editedUser = await updateUser(userId, req.body);
    return res
      .status(200)
      .send({ editedUser, message: "User edited successfully" });
  } catch {
    return res.status(500).send("Internal Server Error");
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    await deleteOneUser(userId);
    return res.status(200).send({ message: "User deleted" });
  } catch {
    return res.status(500).send("Internal Server Error");
  }
}

export async function getAllDeliveries(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const allUsers = await getAllUsers();
    return res.status(200).send({ allUsers, message: "All Users" });
  } catch (error) {
    return res.status(404).send({ message: (error as Error).message });
  }
}

export async function getAllActiveDeliveries(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const allActiveUsers = await getAllActiveUsers();
    return res
      .status(200)
      .send({ allActiveUsers, message: "All active users" });
  } catch (error) {
    return res.status(404).send({ message: (error as Error).message });
  }
}
