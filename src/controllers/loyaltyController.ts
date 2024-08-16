import { Request, Response } from 'express';
import { LoyaltyService } from '../services/loyaltyService';

const loyaltyService = new LoyaltyService();

export class LoyaltyController {
    async getAllLoyalties(req: Request, res: Response) {
        try {
            const loyalties = await loyaltyService.getAllLoyalties(); // ERROR EN getAllLoyalties
            res.json(loyalties);
        } catch (error) {
            console.error("Error al obtener los datos:", error); // Añadido para mayor detalle
            res.status(500).json({ error: 'Error al obtener los datos' });
        }
    }

    async createLoyalty(req: Request, res: Response) {
        try {
            const newLoyalty = await loyaltyService.createLoyalty(req.body);
            res.status(201).json(newLoyalty);
        } catch (error) {
            console.error("Error al crear el dato:", error); // Añadido para mayor detalle
            res.status(500).json({ error: 'Error al crear el dato' });
        }
    }

    async updateLoyalty(req: Request, res: Response) {
        try {
            const updatedLoyalty = await loyaltyService.updateLoyalty(req.params.id, req.body); // ERROR en updateLoyalty
            res.json(updatedLoyalty);
        } catch (error) {
            console.error("Error al actualizar el dato:", error); // Añadido para mayor detalle
            res.status(500).json({ error: 'Error al actualizar el dato' });
        }
    }

    async deleteLoyalty(req: Request, res: Response) {
        try {
            await loyaltyService.deleteLoyalty(req.params.id); // ERROR en deleteLoyalty
            res.status(204).send();
        } catch (error) {
            console.error("Error al eliminar el dato:", error); // Añadido para mayor detalle
            res.status(500).json({ error: 'Error al eliminar el dato' });
        }
    }
}
