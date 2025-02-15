import express, { Router } from "express";
import { isAdmin, isDelivery } from "../middleware/validateMiddleware";
import {
  editPackage,
  getAllPackages,
  selectPackages,
  createPackage,
  deletePackage,
  updatePackage
} from "../controllers/packagesController";

const router: Router = express.Router();

/**
 * @openapi
 * /api/package/{id}/select/packages:
 *    put:
 *      tags:
 *      - packages
 *      summary: To select a package
 *
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/bodyPackageSelect'
 *        required: true
 *      responses:
 *        200:
 *          description: (OK) Created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/bodyPackageSelect'
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 * components:
 *       responses:
 *
 *          Unauthorized:
 *            description: (Unauthorized) No hay autorizaciÃ³n para llamar al servicio
 *
 *          NotFound:
 *            description: (NotFound) No se encontrÃ³ informaciÃ³n
 *
 *          BadRequest:
 *            description: (Bad Request) Los datos enviados son incorrectos o hay datos obligatorios no enviados
 *
 *          ServerError:
 *            description: Error en servidor
 */
router.put("/:id/select/packages", isDelivery, selectPackages);

/**
 * @openapi
 * /api/package/{idUser}/edit/package/{idPackage}:
 *    put:
 *      tags:
 *      - packages
 *      summary: To edit a package selected by user
 *
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/bodyPackageEdit'
 *        required: true
 *      responses:
 *        200:
 *          description: (OK) Created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/bodyPackageEdit'
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 * components:
 *       responses:
 *
 *          Unauthorized:
 *            description: (Unauthorized) No hay autorizaciÃ³n para llamar al servicio
 *
 *          NotFound:
 *            description: (NotFound) No se encontrÃ³ informaciÃ³n
 *
 *          BadRequest:
 *            description: (Bad Request) Los datos enviados son incorrectos o hay datos obligatorios no enviados
 *
 *          ServerError:
 *            description: Error en servidor
 */
router.put("/:idUser/edit/package/:idPackage", isDelivery, editPackage);

/**
 * @openapi
 * /api/package/{idUser}/packages:
 *    get:
 *      tags:
 *      - packages
 *      summary: To view a package selected by user
 *
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/bodyPackageGet'
 *        required: true
 *      responses:
 *        200:
 *          description: (OK) Created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/bodyPackageGet'
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 * components:
 *       responses:
 *
 *          Unauthorized:
 *            description: (Unauthorized) No hay autorizaciÃ³n para llamar al servicio
 *
 *          NotFound:
 *            description: (NotFound) No se encontrÃ³ informaciÃ³n
 *
 *          BadRequest:
 *            description: (Bad Request) Los datos enviados son incorrectos o hay datos obligatorios no enviados
 *
 *          ServerError:
 *            description: Error en servidor
 */
router.get("/:idUser/packages", isDelivery, getAllPackages);

/**
 * @openapi
 * /api/package/new:
 *    post:
 *      tags:
 *      - packages
 *      summary: To create a package
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/bodyPackagesGet'
 *        required: true
 *      responses:
 *        200:
 *          description: (OK) Created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/bodyPackagesGet'
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 * components:
 *       responses:
 *
 *          Unauthorized:
 *            description: (Unauthorized) No hay autorizaciÃ³n para llamar al servicio
 *
 *          NotFound:
 *            description: (NotFound) No se encontrÃ³ informaciÃ³n
 *
 *          BadRequest:
 *            description: (Bad Request) Los datos enviados son incorrectos o hay datos obligatorios no enviados
 *
 *          ServerError:
 *            description: Error en servidor
 */
router.post("/new", isAdmin, createPackage);
/**
 * @openapi
 * /api/package/:
 *    get:
 *      tags:
 *      - packages
 *      summary: To view all packages
 *      responses:
 *        200:
 *          description: (OK) Created
 *          content:
 *            application/json: {}
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 * components:
 *       responses:
 *
 *          Unauthorized:
 *            description: (Unauthorized) No hay autorizaciÃ³n para llamar al servicio
 *
 *          NotFound:
 *            description: (NotFound) No se encontrÃ³ informaciÃ³n
 *
 *          BadRequest:
 *            description: (Bad Request) Los datos enviados son incorrectos o hay datos obligatorios no enviados
 *
 *          ServerError:
 *            description: Error en servidor
 */
router.get("/", isAdmin, getAllPackages);
/**
 * @openapi
 * /api/package/edit/package/{id}:
 *    put:
 *      tags:
 *      - packages
 *      summary: To edit a package
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/bodyPackagesGet'
 *        required: true
 *      responses:
 *        200:
 *          description: (OK) Created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/bodyPackagesGet'
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 * components:
 *       responses:
 *
 *          Unauthorized:
 *            description: (Unauthorized) No hay autorizaciÃ³n para llamar al servicio
 *
 *          NotFound:
 *            description: (NotFound) No se encontrÃ³ informaciÃ³n
 *
 *          BadRequest:
 *            description: (Bad Request) Los datos enviados son incorrectos o hay datos obligatorios no enviados
 *
 *          ServerError:
 *            description: Error en servidor
 */
router.put("/edit/package/:id", isAdmin, updatePackage);
/**
 * @openapi
 * /api/package/delete/package/{id}:
 *    delete:
 *      tags:
 *      - packages
 *      summary: To delete a package
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/bodyPackageSelect'
 *        required: true
 *      responses:
 *        200:
 *          description: (OK) Created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/bodyPackageSelect'
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 * components:
 *       responses:
 *
 *          Unauthorized:
 *            description: (Unauthorized) No hay autorizaciÃ³n para llamar al servicio
 *
 *          NotFound:
 *            description: (NotFound) No se encontrÃ³ informaciÃ³n
 *
 *          BadRequest:
 *            description: (Bad Request) Los datos enviados son incorrectos o hay datos obligatorios no enviados
 *
 *          ServerError:
 *            description: Error en servidor
 */
router.delete("/delete/package/:id", isAdmin, deletePackage);

export default router;
