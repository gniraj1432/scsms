package com.springboot.controller;

import com.springboot.model.Complaint;
import com.springboot.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/complaints")
@CrossOrigin(origins = "http://localhost:3000")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    @PostMapping
    public Complaint reportIssue(@RequestParam("description") String description,
                                 @RequestParam("area") String area,
                                 @RequestParam("latitude") double latitude,
                                 @RequestParam("longitude") double longitude,
                                 @RequestParam("status") String status,
                                 @RequestParam("photo") MultipartFile photo) throws IOException {

        Complaint complaint = new Complaint();
        complaint.setDescription(description);
        complaint.setArea(area);
        complaint.setLatitude(latitude);
        complaint.setLongitude(longitude);
        complaint.setStatus(status);

        return complaintService.registerComplaint(complaint, photo);
    }

    @GetMapping
    public List<Complaint> getAllComplaints() {
        return complaintService.getAllComplaints();
    }
}
