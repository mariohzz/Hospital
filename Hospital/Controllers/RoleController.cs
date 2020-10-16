using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity.Owin;
using Hospital.Models;
using System.Threading.Tasks;
using Hospital;
using holaHola.Models;

namespace holaHola.Controllers
{
    public class RoleController : Controller
    {
        private ApplicationRoleManger _roleManager;

        public RoleController()
        {
        }
        public RoleController(ApplicationRoleManger roleManger)
        {
            RoleManager = _roleManager;
        }
        public ApplicationRoleManger RoleManager
        {
            get
            {
                return _roleManager ?? HttpContext.GetOwinContext().Get<ApplicationRoleManger>();
            }
            private set
            {
                _roleManager = value;
            }
        }
        // GET: Role
        public ActionResult Index()
        {
            List<RoleViewModel> list = new List<RoleViewModel>();
            foreach (var role in RoleManager.Roles)
             list.Add(new RoleViewModel(role));
            return View(list);
        }
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public async Task<ActionResult> Create(RoleViewModel model)
        {
            var role = new ApplicationRole() { Name = model.Name };
            await RoleManager.CreateAsync(role);
            return RedirectToAction("index");
        }
        public async Task<ActionResult> Edit(String id)
        {
            var role = await RoleManager.FindByIdAsync(id);
            return View(new RoleViewModel(role));
        }
        public async Task<ActionResult> Edit(RoleViewModel model)
        {
            var role = new ApplicationRole() { Id=model.id,Name = model.Name };
            await RoleManager.UpdateAsync(role);
            return RedirectToAction("index");
        }
        public async Task<ActionResult> Details(String id)
        {
            var role = await RoleManager.FindByIdAsync(id);
            return View(new RoleViewModel(role));
        }
        public async Task<ActionResult> Delete(String id)
        {
            var role = await RoleManager.FindByIdAsync(id);
            return View(new RoleViewModel(role));
        }
        public async Task<ActionResult> DeleteConfirmed(String id)
        {
            var role = await RoleManager.FindByIdAsync(id);
            await RoleManager.DeleteAsync(role);
            return RedirectToAction("index");
        }

    }
}