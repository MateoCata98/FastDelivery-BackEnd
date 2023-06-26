import { newPackage } from "./06-admin-create-package.cy";
import { adminToken } from "./04-admin-get-all-deliveries.cy";

describe("Update Package", () => {
  it("should update a package", () => {
    const packageId = newPackage.id;
    const updatedPackageData = {
      clientname: "example",
      quantity: 22232,
      weight: 123,
      address: "address example",
      status: "inactive"
    };

    cy.request({
      method: "PUT",
      url: `http://localhost:3001/api/admin/edit/package/${packageId}`,
      headers: {
        Authorization: `Bearer ${adminToken}`
      },
      body: updatedPackageData
    }).then((response) => {
      expect(response.status).to.equal(200);
      // expect(response.body).to.have.property("Package updated successfully");
    });
  });
});
